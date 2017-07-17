/**
 * 计算文件 MD5 辅助方法
 */
import SparkMD5 from 'spark-md5'

/**
 * 得到文件名后缀方法
 * @param 文件名
 * @returns string 文件名后缀
 */
const getSuffix = (filename) => {
  let pos = filename.lastIndexOf('.')
  let suffix = ''
  if (pos != -1) {
    suffix = filename.substring(pos)
  }
  return suffix;
}
/**
 * 计算文件的 MD5 值
 * @param params 接收的参数
 * @param handleCb 回调处理函数
 */
export const calculateImageMD5 = (file, callback) => {
  let blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
    chunkSize = 2097152,                             // Read in chunks of 2MB
    chunks = Math.ceil(file.size / chunkSize),
    currentChunk = 0,
    spark = new SparkMD5.ArrayBuffer(),
    fileReader = new FileReader();
  fileReader.onload = (e) => {
    spark.append(e.target.result);                   // Append array buffer
    currentChunk++;

    if (currentChunk < chunks) {
      loadNext();
    } else {
      let filename = '/' + spark.end() + getSuffix(file.name)
      callback(filename)
    }
  };

  fileReader.onerror = () => {
    console.warn('oops, something went wrong.');
  };

  function loadNext() {
    var start = currentChunk * chunkSize,
      end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;

    fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
  }

  loadNext();
}

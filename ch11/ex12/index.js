class FileSizeOverError extends Error {
  constructor(fileSize) {
    super();
    this.statusText = `Input file size: ${fileSize} is too large`;
  }
  get name() {
    return 'FILE_SIZE_TOO_LARGE';
  }
}

export default ({ name, data = {} }) => {
  return new Promise((resolve, reject) => {
    uni.showLoading();

    uniCloud.callFunction({
      name,
      data,
      success: ({ result }) => {
        if (result.code === 0) {
					console.log('操了', result);
          resolve(result.data);
        } else {
          uni.showToast({
            title: result.msg,
            icon: "none",
          });
        }
      },
      fail: (error) => {
        reject(error);
      },
      complete: () => {
        uni.hideLoading();
      },
    });
  });
};

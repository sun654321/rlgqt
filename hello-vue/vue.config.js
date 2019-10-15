module.exports={
  lintOnSave:false,
  devServer:{
    proxy:{
      '/portal':{
        target:'http://122.51.59.135',//后端服务器的域名
        ws: true,//是否代理websockets
        changeOrigin: true//设置同源，默认false,
      }
    }
  },
};

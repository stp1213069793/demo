

export default   {
    navigator(name) {
        if (this.$route.name == name) return;
        this.$router.push({
          name: name,
        });
      },
      install(vue){
        // 通常情况下，我们在定义全方法或者全局变量的时候，
        // 在变量或者方法名之前加一个$
        // 他的目的就是让你避免命名冲突

        // 这个的实现原理，就是elementui 插件的底层实现原理
        vue.prototype.$navigator=this.navigator;
      }
  }
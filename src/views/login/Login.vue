<template>
  <div class="login-page">
      <div class="login-page__head">
          您需要登录才能继续访问
          <router-link to="/home" class="skip">关闭</router-link>
      </div>
      <div class="login-page__logo">
      </div>
      <div class="am-list">
          <div class="am-list-item">
            <div class="am-list-control">
                <input type="text" name="" id="" placeholder="手机号/邮箱/会员名" class="am-input-required">
            </div>
          </div>
          <div class="am-list-item">
            <div class="am-list-control">
                <input type="password" name="" id="" placeholder="请输入密码" class="am-input-required">
            </div>
          </div>
          <div class="am-footer">
              <span class="am-footer__left">短信验证码登录</span>
              <span class="am-footer__right">免费注册</span>
          </div>
          <div class="am-fieldBottom">
              <button class="am-button-submit am-button" type="submit">登录</button>
          </div>
      </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang='scss' >
    .login-page{
        .login-page__head{
            width: 100%;
            height: 1.386667rem;
            background: rgb(238, 238, 238);
            line-height: 1.386667rem;
            text-align: left;
            box-sizing: border-box;
            padding-left: .533333rem;
            position: absolute;
            left: 0px;
            top: 0px;
            font-size: .426667rem;
            font-weight: bold;
            color: rgb(51, 51, 51);
        }
        .skip{
            display: block;
            position: absolute;
            right: 0px;
            top: 0px;
            height: 1.386667rem;
            line-height: 1.386667rem;
            padding: 0rem .533333rem;
            color: #cccccc;
        }
        .login-page__logo{
            width: 2.13333333rem;
            height: 2.13333333rem;
            background: url(https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png) no-repeat;
            background-size: contain;
            margin: 2.25333333rem auto 0;
        }
        .am-list{
            width: 8.77333333rem;
            position: relative;
            margin: 0 auto;
            font-size: .42666667rem;
            color: #333;
        }
        .am-list-item {
            position: relative;
            width: 100%;
            margin: 1.4rem 0 0;
            border-bottom: 1px solid #ff5000;
        }
        .am-list-control{
            width: 100%;
            margin: 0px;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
        }
        .am-input-required{
            font-size: inherit;
            width: 7.73333333rem;
            height: .48rem;
            margin: 0 0 .17333333rem .12rem;
            outline: none;
            border: 0;
            color: #333;
        }
        .am-footer{
            font-size: .37333333rem;
            width: 8.77333333rem;
            margin: .69333333rem auto 0;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
        }
        .am-footer__left{
            color: #555;
            text-decoration: none;
        }
        .am-footer__right{
            color: #555;
            text-decoration: none;
        }
        .am-fieldBottom{
            margin-top: .94666667rem;
        }
        .am-button{
            font-size: .42666667rem;
            width: 100%;
            height: 1.2rem;
            line-height: 1.2rem;
            border-radius: .6rem;
            text-align: center;
            border: 0;
            outline: 0;
        }
        .am-button-submit{
            background: -webkit-linear-gradient(left,#ff9000,#ff5000) no-repeat;
            color: #fff;
            box-shadow: 0 0.08rem 0.16rem #f7c7b1;
        }

    }
</style>
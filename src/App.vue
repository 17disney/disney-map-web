<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html {
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
input[type='submit'],
input[type='reset'],
input[type='button'],
input {
  -webkit-appearance: none;
  resize: none;
}
img {
  max-width: 100%;
  height: auto;
  width: auto\9; /* ie8 */
  border: none;
}
/* 初始化开始*/
* {
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: border-box;
}
body {
  background-color: #fff;
  color: #666;
  font: 0.26rem/.4rem 'Microsoft YaHei';
}
em,
i,
b {
  font-weight: normal;
  font-style: normal;
}
a {
  text-decoration: none;
  color: #969696;
}
a:hover {
  text-decoration: none;
}
li {
  list-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}
.clearfix:after {
  content: '';
  display: block;
  visibility: hidden;
  height: 0;
  clear: both;
}
.clearfix {
  zoom: 1;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #ff806b;
}
input:-moz-placeholder,
textarea:-moz-placeholder {
  color: #ff806b;
}
input::-moz-placeholder,
textarea::-moz-placeholder {
  color: #ff806b;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: #ff806b;
}
/* 初始化结束 */
</style>

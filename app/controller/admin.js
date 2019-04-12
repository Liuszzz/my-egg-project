// app/controller/home.js
const Controller = require('egg').Controller;

class adminController extends Controller {
  async index() {
    this.ctx.body = `
    <a href="/home">home</a>
    <a href="/news">news</a>
    <image src="../public/images/sun.jpg"></image>
    `;
  }
}

module.exports = adminController;
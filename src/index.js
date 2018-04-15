import { formatDate } from '@/util';
import './index.less';
import logo from './assets/logo.jpg';

const $app = document.getElementById('app');

const strHtml = `
<img src="${logo}" alt="logo" />
<h1>Hello World</h1>
<p>Time now is <span id="time"></span></p>
`;

$app.innerHTML = strHtml;

const $time = document.getElementById('time');

function doTimekeeping() {
  $time.innerHTML = formatDate(new Date());
}

doTimekeeping();
setInterval(doTimekeeping, 1000);

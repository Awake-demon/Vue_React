// 块级作用域

//生成十个按钮，点击没个按钮的时候弹出1-10
var i = 0;
for (i = 1; i <= 10; i++) {
    (function (i) {
        var btn = document.createElement('button');
        btn.innerText = i;
        btn.onclick = function () {
            lert(i)
        }
        document.body.appendChild(btn)
    })
}
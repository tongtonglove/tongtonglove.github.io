(function() {  
    "use strict";  
    
    // 创建样式  
    const style = document.createElement('style');  
    style.type = 'text/css';  
    style.textContent = `  
        @charset "UTF-8";  
        .duilian__wrapper {  
            position: fixed;  
            top: 50%;  
			transform: translateY(-50%);
            left: 10px;  
            right: 10px;  
            z-index: 999;  
            display: flex;  
            justify-content: space-between;  
        }  
        .duilian__box {  
            position: relative;  
            display: inline-block;  
            width: 3rem;  
            background: rgba(216, 0, 15, .8);  
            border-radius: 12px;  
            box-shadow: -5px 5px 50px 4px #fa6c00;  
        }  
        .duilian__text {  
            font-family: '隶书', sans-serif;  
            font-size: 2rem;  
            color: #dc8f03;  
            line-height: 70px;  
            text-align: center;  
        }  
    `;  
    document.head.appendChild(style);  

    // 创建内容  
    const wrapper = document.createElement('div');  
    wrapper.className = 'duilian__wrapper';  

    const leftBox = document.createElement('div');  
    leftBox.className = 'duilian__box';  
    leftBox.innerHTML = '<div class="duilian__text">梧桐树上凤呈祥</div>';  

    const rightBox = document.createElement('div');  
    rightBox.className = 'duilian__box';  
    rightBox.innerHTML = '<div class="duilian__text">世纪门前蛇起舞</div>';  

    // 将左右春联添加到容器中  
    wrapper.appendChild(leftBox);  
    wrapper.appendChild(rightBox);  

    // 将整个内容添加到 body 中  
    document.body.appendChild(wrapper);  
})();

define(function(require, exports, module) {
	var Bird = require('./bird')
	var Sky = require('./sky')
	var Land = require('./land')
    var Pipe = require('./pipe')
    
	exports.run = function(imgs) {
		var cvs = document.getElementById('cvs');
	    var ctx = cvs.getContext('2d');

	    var bird = new Bird(150, 0.0005, imgs.bird, ctx);
	        cvs.addEventListener('click', function () {

	        bird.fly();
	    });

	    var sky1 = new Sky(0, -0.075, imgs.sky, ctx);
	    var sky2 = new Sky(800, -0.075, imgs.sky, ctx);

	    var land1 = new Land(0, -0.2, imgs.land, ctx);
	    var land2 = new Land(336, -0.2, imgs.land, ctx);
	    var land3 = new Land(672, -0.2, imgs.land, ctx);
	    var land4 = new Land(1008, -0.2, imgs.land, ctx);

	    var pipe1 = new Pipe(800, -0.2, imgs.pipe1, imgs.pipe2, ctx);
	    var pipe2 = new Pipe(1000, -0.2, imgs.pipe1, imgs.pipe2, ctx);
	    var pipe3 = new Pipe(1200, -0.2, imgs.pipe1, imgs.pipe2, ctx);
	    var pipe4 = new Pipe(1400, -0.2, imgs.pipe1, imgs.pipe2, ctx);
	    var pipe5 = new Pipe(1600, -0.2, imgs.pipe1, imgs.pipe2, ctx);

	    var lastTime = Date.now();

	    function mainLoop() {
	        var nowTime = Date.now();
	        var dt = nowTime - lastTime; // 获取了间隔时间
	        lastTime = nowTime;
	        // 在开始新的一帧图像时，把画布擦干净
	        ctx.clearRect(0, 0, 800, 600);

	        sky1.update(dt);
	        sky2.update(dt);
	        bird.update(dt);
	        land1.update(dt);
	        land2.update(dt);
	        land3.update(dt);
	        land4.update(dt);
	        pipe1.update(dt);
	        pipe2.update(dt);
	        pipe3.update(dt);
	        pipe4.update(dt);
	        pipe5.update(dt);



	        sky1.render();
	        sky2.render();
	        pipe1.render();
	        pipe2.render();
	        pipe3.render();
	        pipe4.render();
	        pipe5.render();
	        land1.render();
	        land2.render();
	        land3.render();
	        land4.render();
	        bird.render();


	        ctx.rect(0, -400, 800, 400);
	        ctx.rect(0, 488, 800, 400);
	        var gameOver = ctx.isPointInPath(150, bird.y);
	        ctx.beginPath();


	        // 如果没有gameOver，我们就有下一帧
	        if (!gameOver) {
	            requestAnimationFrame(mainLoop)
	        }
	    }

	    // 在浏览器觉得合适时，调用mainLoop这个函数
	    requestAnimationFrame(mainLoop)
	}
})
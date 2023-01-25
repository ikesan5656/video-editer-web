/**
 * このクラスは動画関連の操作をするクラス(データ保持をしてはいけない)
 */


let time: number = 0;
let timeRatio: number = 1;
var animationId: number;

function updateTimeRatio() {
	const lastTime = time;
	if (lastTime > 0) {
		// 1フレーム当たりの時間(ミリ秒)
		const FPS_60_SEC = 1000 / 60;
		// 差分時間をセット
		const dTime = new Date().getTime() - lastTime;
		// FPS60との比較係数をセット
		timeRatio = dTime / FPS_60_SEC;
	}
	// 現在時間をセット
	time = new Date().getTime();
}

function tick() {
	animationId = window.requestAnimationFrame(tick);
	// 比較係数を更新
	updateTimeRatio();

	console.log(timeRatio);

	//console.log("更新");

	// メッシュを移動
	//mesh.position.x += 10 * timeRatio;

	// 描画
	//renderer.render(scene, camera);
}

class VideoEngine {

	private static instance: VideoEngine;	//自身のシングルトンインスタンス
	//private time: number = 0;
	//private timeRatio: number = 1;
	//private animationId: number;	// requestAnimationFrameを管理するID

	//コンストラクタを外部から作れないように
	private constructor() {
		console.log("VideoEngine_create");
	}

	static getInstance() {
		if (VideoEngine.instance) return VideoEngine.instance;
		VideoEngine.instance = new VideoEngine();
    return VideoEngine.instance;
	}

	/*public updateTimeRatio() {
		const lastTime = this.time;
		if (lastTime > 0) {
			// 1フレーム当たりの時間(ミリ秒)
			const FPS_60_SEC = 1000 / 60;
			// 差分時間をセット
			const dTime = new Date().getTime() - lastTime;
			// FPS60との比較係数をセット
			this.timeRatio = dTime / FPS_60_SEC;
		}
		// 現在時間をセット
		this.time = new Date().getTime();
	}
	
	public tick() {
		window.requestAnimationFrame(this.tick);
		// 比較係数を更新
		//this.updateTimeRatio();
	
		//console.log(this.timeRatio);
	
		console.log("更新");
	
		// メッシュを移動
		//mesh.position.x += 10 * timeRatio;
	
		// 描画
		//renderer.render(scene, camera);
	}*/


	//プレビュー再生の開始
	public startPreviewVideo() {
		//requestAnimationFrameを開始
		animationId = window.requestAnimationFrame(tick);
		//console.log(this.animationId);
		//tick();

	}

	public stopPreviewVideo() {
		//requestAnimationFrameを終了
		window.cancelAnimationFrame(animationId);
	}

}

export default VideoEngine;








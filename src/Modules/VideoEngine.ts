/**
 * このクラスは動画関連の操作をするクラス(データ保持をしてはいけない)
 */
import { PixiRef, Sprite, Stage } from "@inlet/react-pixi";
import * as PIXI from 'pixi.js';
import { RefObject } from "react";
import testVideo from "../Aseets/free-video1-sea-cafinet.mp4";
//import testVideo from "../Aseets/free-video1-sea-cafinet.mp4";
class VideoEngine {

	private static instance: VideoEngine;	//自身のシングルトンインスタンス
	private time: number = 0;
	private timeRatio: number = 1;
	private animationId: number = 0;	// requestAnimationFrameを管理するID
	//private editorCanvasRef?: RefObject<HTMLCanvasElement>;	// キャンバスのRef
	private videoStage?: PIXI.Container;
	private videoEle?: HTMLVideoElement;
	private videoTexture?: PIXI.Sprite;

	private targetInterval: number = 1000 / 60;
	private prevTime: number = Date.now() - this.targetInterval;
	readonly UPDATE_LOAD_COEFF: number = 0.5;

	//現在の再生時間計算
	private startTime: number = 0;		//再生開始時の時間(m/s)
	private currentTime: number = 0;	//現在の再生時間(m/s)

	private renderer = PIXI.autoDetectRenderer();


	//コンストラクタを外部から作れないように
	private constructor() {
		console.log("VideoEngine_create");
		//this.editorCanvasRef = undefined;
		//this.stageRef = undefined;
	}

	static getInstance() {
		if (VideoEngine.instance) return VideoEngine.instance;
		VideoEngine.instance = new VideoEngine();
    return VideoEngine.instance;
	}

	public updateTimeRatio() {
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
		this.animationId = window.requestAnimationFrame(this.tick.bind(this));
		// 比較係数を更新
		//this.updateTimeRatio();
	
		//console.log(this.timeRatio);
	
		console.log("更新");
	
		// メッシュを移動
		//mesh.position.x += 10 * timeRatio;
	
		// 描画
		//renderer.render(scene, camera);
	}

	public update() {
		let currentTime = Date.now();
    let updated = false;
    while (currentTime - this.prevTime > this.targetInterval * 0.5) {
        this.update.bind(this);
        updated = true;
        this.prevTime += this.targetInterval;
        const now = Date.now();
        const updateTime = now - currentTime;
        if (updateTime > this.targetInterval * this.UPDATE_LOAD_COEFF) {
            // overloaded
            if (this.prevTime < now - this.targetInterval) {
                // do not accumulate too much
                this.prevTime = now - this.targetInterval;
            }
            break;
        }
    }
    if (updated) {
        //draw();
				//console.log("更新");
				this.currentTime = Date.now() - this.startTime;
				//console.log(this.currentTime * 0.001);
				this.videoEle!.currentTime = this.currentTime * 0.001;
				console.log(this.videoEle!.currentTime);
				//this.videoTexture._texture._frame.x = this.currentTime * 0.001;

				//console.log(this.videoTexture._texture._frame.x);
				//const container = new PIXI.Container();
				//this.renderer.render(container);
				//this.videoStage.render();

    }
		this.animationId = requestAnimationFrame(this.update.bind(this));
	}


	//プレビュー再生の開始
	public startPreviewVideo() {
		//requestAnimationFrameを開始
		//this.animationId = window.requestAnimationFrame(this.tick.bind(this));
		//console.log(this.animationId);
		//tick();
		this.startTime = Date.now();
		this.animationId = window.requestAnimationFrame(this.update.bind(this));

	}

	public stopPreviewVideo() {
		//requestAnimationFrameを終了
		window.cancelAnimationFrame(this.animationId);
	}

	//PixiCanvasに動画を追加
	public addVideoPixiSprite(path: PIXI.SpriteSource) {
		// 動画をベースとするSpriteクラスを作成
		const videoSprite: PIXI.Sprite = PIXI.Sprite.from(path);
		//PixiのStageのref経由でaddChildを実行する
	}

	// stageに画像追加
	public addImage(path: PIXI.SpriteSource) {
		const imageSprite: PIXI.Sprite = PIXI.Sprite.from(path);
		//imageSprite.anchor.x = 0.5;
		//imageSprite.anchor.y = 0.5;

		imageSprite.x = this.videoStage!.width / 2;
		imageSprite.y = this.videoStage!.height / 2; 

		//console.log(this.videoStage);
		this.videoStage!.addChild(imageSprite);
	}

	public addVideo(path: PIXI.SpriteSource, x: number, y: number) {
		const videoSprite: PIXI.Sprite = PIXI.Sprite.from(path,{
			resourceOptions: {
				autoPlay: false,
				updateFPS: 60,
			}
		});
		videoSprite.x = x;//this.videoStage.width / 2;
		videoSprite.y = y;//this.videoStage.height / 2;

		this.videoTexture = videoSprite;
		this.videoStage!.addChild(this.videoTexture);
	}

	public addVideoEle() {
		console.log("test");
		console.log(testVideo);
		this.videoEle = document.createElement("video");
		this.videoEle.src = testVideo; // 動的に生成した動画のURL
		//this.videoEle.src = `${process.env.PUBLIC_URL}/logo192.png`; // 動的に生成した動画のURL
		this.videoEle.setAttribute("controls","");
		//this.videoEle.play();
		this.videoEle.currentTime = 1;
		this.videoEle.load();
		this.addVideo(this.videoEle, 0, 0);
		

		this.videoEle.addEventListener('loadedmetadata', function() {
			console.log(this.duration);
			
		});
	}

	public playVideo() {
		this.videoEle!.play();
	}

	public addCircle() {
		let ellipse = new PIXI.Graphics()       // メソッドチェーンで描画するので、;(セミコロン)を付けない   
		.beginFill(0xff0000)                    // endFill()までの描画に対する塗りつぶし色指定
		.drawEllipse(0,0,30,20)                 // (中心のx座標, 中心のy座標, 幅, 高さ)
		.endFill();                             // ここまでに描いた図形を塗りつぶす

		// 基準点を設定(px) 図形(PIXI.Graphicsにはpivotはないので注意)
		ellipse.pivot.x = 15
		ellipse.pivot.y = 10
		ellipse.x = 300;
		ellipse.y = 300;     
		ellipse.rotation = Math.PI / 6;
		this.videoStage!.addChild(ellipse);
	}

	// stageのrefをセット
	public setCanvasRef(stage: PIXI.Container) {
		//this.editorCanvasRef = ref;
		this.videoStage = stage;
	}

}

export default VideoEngine;








/**
 * ビデオ素材クラス
 */
import * as PIXI from 'pixi.js';

class VideoMaterial {

	private duration: number;
	private startTime: number;
	private endTime: number;
	private isPlay: boolean;
	private videoEle: HTMLVideoElement;	// Videoタグ
	private videoSprite: PIXI.Sprite;	// PIXISprite

	/* TODO: 今後必要そうなパラメータリスト
		・レイヤー優先度
	*/

	constructor(videoPath: string, x: number, y: number) {
		this.duration = 0;
		this.startTime = 5;
		this.endTime = 0;
		this.isPlay = false;

		// Videoタグオブジェクト作成
		this.videoEle = document.createElement("video");
		this.videoEle.src = videoPath;
		this.videoEle.setAttribute("controls","");
		this.videoEle.currentTime = 1;
		this.videoEle.load();

		// PIXISprite作成
		const videoSprite: PIXI.Sprite = PIXI.Sprite.from(this.videoEle,{
			resourceOptions: {
				autoPlay: false,
				updateFPS: 60,
			}
		});
		this.videoSprite = videoSprite;

		this.videoEle.addEventListener('loadedmetadata', () => {
			this.duration = this.videoEle.duration;
			console.log(`duration: ${this.duration}`);
		});

	}

	// 再生開始
	public play() {
		this.videoEle.play();
		this.videoEle.currentTime = 0;
		this.isPlay = true;
		// TODO 再生開始成功のコールバックで再生フラグを変えれるようにする
	}

	// ポーズ
	public pause() {
		this.videoEle.pause();
		this.isPlay = false;
		this.videoEle.currentTime = 0;
	}

	//インスタンス破棄時に呼ぶ
	public finalize() {
		this.isPlay = false;
	}

	public getVideoElement() {
		return this.videoEle;
	}

	public getVideoSprite() {
		return this.videoSprite;
	}

	public getStartTime() {
		return this.startTime;
	}

	public getIsPlay() {
		return this.isPlay;
	}

}

export default VideoMaterial;
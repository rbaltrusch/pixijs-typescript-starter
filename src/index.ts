import * as PIXI from 'pixi.js';
import { HelloWorld } from './scenes/helloWorld';

const main = async () => {
    // Main app
    let app = new PIXI.Application();

    // Display application properly
    document.body.style.margin = '0';
    (app.renderer.view.style! as any).position = 'absolute';
    (app.renderer.view.style! as any).display = 'block';

    // View size = windows
    app.renderer.resize(window.innerWidth, window.innerHeight);
    window.addEventListener('resize', (e) => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
    });

    // Load assets
    await PIXI.Assets.loader.load('assets/hello-world.png');
    document.body.appendChild(app.view as any);

    // Set scene
    var scene = new HelloWorld(app);
    app.stage.addChild(scene);
};

main();

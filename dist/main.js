import run from './run.js';
async function loop() {
    await run();
    setTimeout(loop, 10);
}
loop();

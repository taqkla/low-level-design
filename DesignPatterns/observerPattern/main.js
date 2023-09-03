const Subject = require('./subject');
const Observer = require('./observer');
function main() {
    const youtubeChannel = new Subject("Tseries");
    youtubeChannel.subscribe(new Observer("Prateek"));
    youtubeChannel.subscribe(new Observer("Aryan"));
    youtubeChannel.notify("New video uploaded : Learn Observer Design Pattern");
    youtubeChannel.subscribe(new Observer("Iqbal"));
    youtubeChannel.subscribe(new Observer("Christee"));
    youtubeChannel.notify("New video uploaded : Learn Singleton Design Pattern");
}
main();
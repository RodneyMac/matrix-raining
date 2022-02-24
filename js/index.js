const canvas = document.getElementById("Matrix");
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const lyric = "Tid xyū̀ nı nrk wạtt̄hu thī̀ mị̀mī chīwit mī chīwit kảlạng rx kār txbtô khwām tāy ca pĕnkār pĥn p̄hid k̄hxng phwk k̄heā tĥxngf̂ā klāy pĕn s̄ī dæng klạb s̄ū̀ xảnāc kıl̂ k̄hêā mā tkh̄lum rạk c̄hạn n̂ảtā s̄ī dæng k̄hxng tĥxngf̂ā ykleik kḍ thī̀ thả d̂wy h̄in ceāa cāk beụ̄̂xng l̀āng wiỵỵāṇ nı xdīt thī̀ thryṣ̄ k̄hxng c̄hạn t̄hūk h̄ạkh̄lạng doy h̄lāy khn txn nī̂ kherụ̄̀xngpradạb h̄yd xyū̀ d̂ān bn rx chạ̀wmong h̄æ̀ng kār kæ̂khæ̂n welā k̄hxng khuṇ h̄ludlxy pị f̄n leụ̄xd. Cāk tĥxngf̂ā thī̀ h̄ælk s̄lāy leụ̄xd s̄yxng k̄hwạỵ k̄hxng mạn kār s̄r̂āng khorngs̄r̂āng k̄hxng c̄hạn txn nī̂ c̄hạn ca khrxng rāchy̒ nı leụ̄xd!";

const numbers = "0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1";

const alphabet = lyric + numbers;

const fontSize = 16;
const columns = canvas.width/fontSize;

const rainDrops = [];

for(let x=0; x<columns; x++) {
    rainDrops[x] = 1;
}

const draw = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#0F0';
    context.font = fontSize + 'px monospace';

    for(let i=0; i<rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i*fontSize, rainDrops[i]*fontSize);

        if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};

setInterval(draw, 30);
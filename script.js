let miningInterval;

document.getElementById('start-mining').addEventListener('click', function() {
    document.getElementById('mining-status').children[0].innerText = 'Status: Mining';
    let hashRate = 0;
    miningInterval = setInterval(function() {
        hashRate += 10; // Increase the hash rate by 10 H/s every second
        document.getElementById('mining-status').children[1].innerText = `Hashrate: ${hashRate} H/s`;
        document.getElementById('mining-status').children[2].innerText = `Estimated earnings: ${(hashRate / 1000000).toFixed(7)} BTC/day`; // Assuming 1M H/s = 1 BTC/day
    }, 1000);
});

document.getElementById('stop-mining').addEventListener('click', function() {
    clearInterval(miningInterval);
    document.getElementById('mining-status').children[0].innerText = 'Status: Idle';
    document.getElementById('mining-status').children[1].innerText = 'Hashrate: 0 H/s';
    document.getElementById('mining-status').children[2].innerText = 'Estimated earnings: 0 BTC/day';
});

AOS.init();

const dataDoEvento = new Date("dec 12, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMS = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciAteOEvento / diaEmMS);
    const horasAteOEvento = Math.floor((distanciAteOEvento % diaEmMS) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if(distanciAteOEvento < 0){
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }

}, 1000);
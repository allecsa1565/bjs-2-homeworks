class AlarmClock  {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('Отсутствует id');
        }

        const existId = this.alarmCollection.find(alarm => alarm.id === id);

        if (existId) {
            console.error('Сигнал с таким id уже существует');
            return;
        }

        this.alarmCollection.push({
            id: id,
            time: time,
            callback: callback,
        });
    }

    removeClock(id) {
        const index = this.alarmCollection.findIndex(alarm => alarm.id === id);

        if (id < 0) {
            return false;
        }

        this.alarmCollection.splice(index, 1);

        return true;
    }

    getCurrentFormattedTime() {
        const currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;

        return `${hours}:${minutes}`;
    }

    start() {
        if (this.timerId) {
            return;
        }

        this.timerId = setInterval(() => {
            this.alarmCollection.forEach((alarm) => this.checkClock(alarm));
        }, 1000);
    }

    stop() {
        if (!this.timerId) {
            return;
        }

        clearInterval(this.timerId);
        this.timerId = null;
    }

    checkClock(alarm) {
        if (this.getCurrentFormattedTime() === alarm.time) {
            alarm.callback();
        }
    }

    printAlarms() {
        this.alarmCollection.forEach((alarm) => console.log(`Будильник №${alarm.id} заведен на ${alarm.time}`));
    }

    clearAlarms() {
        this.timerId = null;
        this.alarmCollection = [];
    }
}

function testCase() {
    const alarmClock = new AlarmClock();

    alarmClock.addClock('20:56', () => console.log('Подъем'), 1);
    alarmClock.addClock('20:57', () => { console.log('Подъем 2'); alarmClock.removeClock(2) }, 2);
    alarmClock.addClock('20:58', () => { 
        console.log('Подъем 3');
        alarmClock.stop();
        alarmClock.clearAlarms();
        alarmClock.printAlarms();
    }, 3);
    alarmClock.printAlarms();
    alarmClock.start();
}


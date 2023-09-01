function calculateVolumeAndArea(number) {
    if (isNaN(number) || number == '' || number == null || number < 0) {
        return console.log('При вычислении произошла ошибка');
    } else {
        const v = number*number*number;
        const s = 6*number*number;
        return console.log(`Объем куба: ${v},плошадь всей поверхности: ${s}`);
    }
}

calculateVolumeAndArea( );
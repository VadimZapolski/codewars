function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
   if ((pontoonDistance / youSpeed) >= (sharkDistance / (sharkSpeed / (dolphin ? 2 : 1)))) {
        return 'Shark Bait!'
    }
    return 'Alive!';
}

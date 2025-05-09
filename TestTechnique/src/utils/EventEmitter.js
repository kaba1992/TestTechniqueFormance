import mitt from 'mitt';

const emitter = mitt();

export default emitter;

//exemple d'utilisation

// emitter.on('revealCompleat', (data) => {
 
// });

// emitter.emit('loadingComplete', { loading: false })
import mitt, { Emitter } from "mitt"

type Events = {
	[key: string]: any
}

const emitter: Emitter<Events> = mitt<Events>()

export default emitter

//exemple d'utilisation

// emitter.on('revealCompleat', (data) => {

// });

// emitter.emit('loadingComplete', { loading: false })

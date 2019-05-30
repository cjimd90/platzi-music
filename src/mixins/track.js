const trackMixin = {
    methods: {
        selectTrack () {
            if (!this.track.preview_url) { return }
            this.$emit('select', this.track.id)
            this.$but.$emit('set-track', this.track)
        }
    }
}

export default trackMixin
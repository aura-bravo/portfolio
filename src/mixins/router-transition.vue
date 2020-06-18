<script>
export default({
    created() {
        this.routerTransition();
    },
    methods: {
        routerTransition() {
            const wave = document.querySelector('.router__wave-transition');
            if (!wave.classList.contains('router__wave-transition--active')) {
                wave.classList.add('router__wave-transition--active');
                setTimeout(() => {
                    wave.classList.remove('router__wave-transition--active');
                }, 3000)
            }
        }
    }
})
</script>
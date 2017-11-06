export const sharedMixin = {
    data() {
        return {
            text4: "testers",
        }
    },

    computed: {
        stringAppend: function() {
            var length = this.text4.length;
            return this.text4 + " (" + length + ")";
        }
    }
}
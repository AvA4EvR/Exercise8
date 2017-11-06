<template>
    <div class="container">

        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Mixins Part</h1>
                <p>{{stringAppend}}</p>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
    import {sharedMixin} from './sharedMixin'
    export default {
        mixins: [sharedMixin],
    }
</script>

<style>
</style>

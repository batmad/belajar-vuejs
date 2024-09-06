<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <div id="app">
        <div v-for="angka in 10">
            {{ angka }}
        </div>

        <hr>

        <span v-for="angka in 10">
            {{ angka }}
        </span>

        <hr>

        <ul v-for="whatever in fruits">
            <li>{{ whatever }}</li>
        </ul>

        <hr>

        <ul v-for="(whatever, index) in fruits">
            <li>
                {{ whatever }} {{ index }}
                <button @click="hapus(index)">x</button>
            </li>
        </ul>

        <hr>

        <ul v-for="(item, index) in footballPlayers">
            <li>{{ item.name }} - {{ item.position }} - {{ index }}</li>
        </ul>
    </div>

    <script type="module">
        import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

        createApp({
            data() {
                return {
                    fruits : ['apple', 'orange', 'banana', 'lemon'],
                    footballPlayers : [
                        { name: "garnacho", position: "forward" },
                        { name: "mainoo", position: "midfielder" },
                        { name: "martinez", position: "defender" },
                        { name: "onana", position: "goal keeper" },
                    ]
                }
            },
            methods: {
                hapus(index) {
                    this.fruits.splice(index, 1)
                }
            },
        }).mount('#app')

    </script>
</body>
</html>

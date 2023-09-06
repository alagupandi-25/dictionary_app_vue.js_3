<template>
    <div class="wrapper" :class="{'active':isactive}">
        <header>English Dictionary</header>
            <div class="search">
                <input type="text" @keypress.enter="getvalue" v-model="inputvalue" placeholder="Search a word" required spellcheck="false">
                <i class="fas fa-search"></i>
                <span v-if="!this.inputvalue.trim() == ''" @click="clearvalue" class="material-icons">close</span>
            </div>
            <p class="info-text">Type any existing word and press enter to get meaning, example, synonyms, etc.</p>
            <ul>
                <li class="word">
                    <div class="details">
                        <p>{{ inputvalue }}</p>
                        <span>_ _</span>
                    </div>
                    <i class="fas fa-volume-up"></i>
                </li>
                <div class="content">
                    <li class="meaning">
                        <div class="details">
                            <p>Meaning</p>
                            <span>___</span>
                        </div>
                    </li>
                    <li class="example">
                        <div class="details">
                            <p>Example</p>
                            <span>___</span>
                        </div>
                    </li>
                    <li class="synonyms">
                        <div class="details">
                            <p>Synonyms</p>
                            <div class="list"></div>
                        </div>
                    </li>
                </div>
            </ul>
      </div>
</template>

<script>
import '../assets/styles.css'; 

export default {
    name :"Main",
    data (){
        return{
            inputvalue : " ",
            isactive : false
        }
    },
    methods:{
        getvalue(){
            if (!this.inputvalue.trim() == "") {
                console.log(this.inputValue);
                console.log(typeof this.inputvalue)
                this.isactive = true;
            }
            else{
                this.isactive = false;
            }
        },
        clearvalue(){
            this.inputvalue = " "
            console.log(this.inputvalue);
            this.isactive = false
        }
    }
};
</script>

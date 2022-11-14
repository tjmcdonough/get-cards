<template>

  <div></div>

</template>

<script>
import axios from 'axios';

export default {
  props: {
      content: { type: Object, required: true },
  },
  mounted() {

    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + this.content.access_token,
        withCredentials: true
    };

    axios.defaults.withCredentials = true;

    axios
      .get(`${this.content.server_url}/${this.content.relative_url}`, { headers })
      .then(response => {
        console.log(this.content.relative_url + 'success', response);
        
        if(this.content.success_value)
          updateValue(this.content.success_value)
      })
      .catch(error => {
          console.log(this.content.relative_url + '|' + error);
      });
    },
    updateValue(val) {
      wwLib.wwVariable.updateValue(this.content.success_value, val);
    }
};
</script>

<template>
  <div>
    The following loaded from api backend: <br />
    {{ message }}
  </div>
</template>

<script>
import axios_factory from '~/lib/axios_factory'

export default {
  head () {
    return {
      title: 'Hello World'
    }
  },
  asyncData (context) {
    const axios = axios_factory(context)

    return axios.get('/api/hello-world')
    .then((response) => {
      return {
        message: response.data.output
      }
    })
  }
}
</script>

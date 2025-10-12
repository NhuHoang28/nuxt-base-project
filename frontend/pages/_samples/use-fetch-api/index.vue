<script lang="ts" setup>
definePageMeta({
  layout: false,
});

// Demo 1: Execute automatically on initial display
const reload = ref();
const res1 = ref();
const {data, isFinished, execute: refresh} = useFetchApi()('/_samples/use-fetch-api');

watch(isFinished, () => {
res1.value = data.value;
});

// Demo 2: Execute manually by clicking button
const requestBody = reactive({name: 'Peter'});
const requestQuery = reactive({userId: '1'});
// const {url: url2} = useUrl({
//   path: '/_samples/use-fetch-api'
// });
// console.log(url2);


import { useUrl } from 'vue-useurl'

const params = {
	search: 'ahmed',
	limit: 50,
	page: 12,
	sort: 'CreatedOn',
	types: ['Cancelled', 'OnGoing']
}

// const {
//   data: res2,
//   isFetching: isFetching2,
//   isFinished: isFinished2,
//   onFetchResponse,
//   onFetchError,
//   onFetchFinally,
//   post,
// } = useFetchApi()(url2, {immediate: false});

// // Fires after the fetch request has finished
// onFetchResponse((response) => {
//   console.log(response);
//   console.log(res2);
// });

// // Fires after a fetch request error
// onFetchError((error) => {
//   console.log(error);
// });

// // Fires after a fetch has completed
// onFetchFinally(() => {
//   console.log('finally');
// });

// const postData = () => {
//   post(requestBody).execute();
// };
// const updateRequestQuery = (event: Event) => {
//   const {value} = event.target as HTMLInputElement;
//   Object.assign(requestQuery, {userId: value});
// };
</script>

<template>
  <div>
    
  </div>
</template>

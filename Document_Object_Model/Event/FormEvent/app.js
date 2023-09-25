const form = document.querySelector('#shelterForm');
//event.preventDefault는 특정 이벤트의 기본 동작이 수행되지 않도록 막아줌.
//보통 form 제출 동작을 막기 위해 사용함.
form.addEventListener('submit', function(e) {
    e.preventDefault()
})
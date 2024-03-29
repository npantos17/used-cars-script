function init() {

    document.getElementById('btn').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            name: document.getElementById('name').value,
            password: document.getElementById('password').value
        };

        fetch('http://127.0.0.1:9000/api_login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then( res => res.json() )
            .then( el => {
                if (el.msg) {
                    alert(el.msg);
                } else {
                    //console.log(el.token)
                    document.cookie = `token=${el.token};SameSite=Lax`;
                    window.location.href = 'index.html';
                }
            });
    });
}
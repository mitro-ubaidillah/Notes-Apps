const BASE_URL = 'https://notes-api.dicoding.dev/v1';

const getAccessToken = () => {
    return localStorage.getItem('accessToken');
}

const putAccessToken = (accessToken) => {
    return localStorage.setItem('accessToken', accessToken);
}

async function fetchWithToken(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }

async function login({ email, password }) {
    const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
    });

    const responseJSON = await response.json();

    if (responseJSON.status !== 'success') {
        alert(responseJSON.message);
        return { error: true, data: null }
    }

    return { error: false, data: responseJSON.data };
}

async function register({ name, email, password }) {
    const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password }),
    });

    const responseJSON = await response.json();

    if (responseJSON.status !== 'success') {
        alert(responseJSON.message);
        return { error: true };
    }

    return { error: false };
}

async function getUserLogged() {
    const response = await fetchWithToken(`${BASE_URL}/users/me`);
    const responseJSON = await response.json();

    if (responseJSON.status !== 'success') {
        return { error: false, data: null };
    }

    return { error: false, data: responseJSON.data };
}

async function addNote({ title, body }) {
    const response = await fetchWithToken(`${BASE_URL}/notes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, body }),
    });

    const responseJSON = await response.json();

    if (responseJSON.status !== 'success') {
        alert(responseJSON.message);
        return { error: true };
    }

    return { error: false };
}

async function getNotes() {
    const response = await fetchWithToken(`${BASE_URL}/notes`);
    const responseJSON = await response.json();

    if(responseJSON.status !== 'success'){
        alert(responseJSON.message);
        return { error: true,  data: [] };
    }

    return { error: false,  data: responseJSON.data };
}

async function getArchiveNotes() {
    const response = await fetchWithToken(`${BASE_URL}/notes/archived`);
    const responseJSON = await response.json();

    if(responseJSON.status !== 'success'){
        alert(responseJSON.message);
        return { error: true,  data: [] };
    }

    return { error: false,  data: responseJSON.data };
}

async function getNote(id) {
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}`);
    const responseJson = await response.json();
  
    if (responseJson.status !== 'success') {
      return { error: true, data: null };
    }
  
    return { error: false, data: responseJson.data };
}

async function archiveNote(id) {
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}/archive`, {
        method: 'POST',
    });

    const responseJSON = await response.json();
    if( responseJSON.status !== 'success' ) {
        alert(responseJSON.message);
        return { error: true, data: null };
    }

    return { error: false, data: responseJSON.data };
}

async function unarchiveNote(id) {
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}/unarchive`, {
        method: 'POST',
    });

    const responseJSON = await response.json();
    if( responseJSON.status !== 'success' ) {
        alert(responseJSON.message);
        return { error: true, data: null };
    }

    return { error: false, data: responseJSON.data };
}

async function deleteNotes(id) {
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}`, {
        method: 'DELETE',
    });

    const responseJSON = await response.json();

    if (responseJSON.status !== 'success') {
        alert(responseJSON.message);
        return {error: true, data: null};
    }

    return { error: false, data: responseJSON.data };
}

export {
    getAccessToken,
    putAccessToken,
    login,
    register,
    getUserLogged,
    addNote,
    getArchiveNotes,
    getNote,
    getNotes,
    archiveNote,
    unarchiveNote,
    deleteNotes,
    
}
const puppeteer = require('puppeteer-core')
const axios = require('axios')
const config = require('config')

const username = config.get('username')
const password = config.get('password')

/**
 * Авторизация. Отправляем логин и пароль,
 * в ответ получаем токен и возвращаем его
 * @returns token
 */
const auth = async () => {
    const options = {
        method: "post",
        url: "https://anty-api.com/auth/login",
        data: {
            username, password
        }
    }
    const response = await axios(options)

    if (response.data.token)
        return response.data.token
    return false
}

/**
 * Получаем список профилей. На входе токен,
 * на выходе массив id профилей
 * @param token
 * @returns {Promise<boolean|*>}
 */
const getProfiles = async token => {
    const options = {
        url: "https://anty-api.com/browser_profiles",
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const {data} = await axios(options)

    if (data && data.data.length > 0) {
        const ids = data.data.map(el => el.id)
        return ids
    }
    return false
}


/**
 * Стартовая функция. Поэтапно:
 * 1. Запрашивает токен
 * 2. Получает список айдишников
 * 3. Обходит циклом, запуская функцию автоматизации
 */
(async _ => {
    const token = "<ВСТАВЬТЕ СЮДА ВАШ ТОКЕН>"
    if (!token) {
        console.log('Токен не получен')
        return
    }
    const profilesIds = await getProfiles(token)
    if (!profilesIds) {
        console.log('Профили отсутствуют')
        return
    }else{
        console.log(profilesIds)
    }
    }

    
)()

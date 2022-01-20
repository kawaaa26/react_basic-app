import React, { useState, useEffect, useCallback, useRef } from 'react';
// useEffectの初回レンダリング時の発火によりGitHubAPが叩かれてしまう問題を防ぐ意図でのuseRefのimport
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// @muiからButtonとTextFielのComponentsをimportしてjsxで使用する。

const Account = () => {

  const [id, setId] = useState('')
  // github APIを叩くためのアカウント名のstate

  const [name, setName] = useState('')
  // nameに関しては現状動いているけどまだ使用されていない。

  const [avatar, setAvatar] = useState('')
  // githubのアバター画像URLのstate

  const [url, setUrl] = useState('https://github.com/')
  // GITHUB PAGEボタンの遷移先URLのstate

  const [color, setColor] = useState('warning')
  // 状態によってGITHUB PAGEボタンの色変更用state

  const renderFlagRef = useRef(false)

  // 下部のTextFieldに値が入力された時にonChangeによって呼び出される
  const inputName = useCallback((event) => {
    console.log(event.target.value)
    setId(event.target.value)
    // ここでsetIdの引数にonChangeイベントの対象に入力された値が
    // 渡されることで、idのstateが更新される。
  }, [id]);
  // idが変更される度にuseCallbackが動く？


  useEffect(() => {
    // 下記のif文の条件として、renderFlagRefの現在の状態がtrueなのであればAPIを叩く。
    // (defaultはfalse)
    if (renderFlagRef.current) {
    const timer = setTimeout(() => {
      fetch(`https://api.github.com/users/${id}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          console.log(data.avatar_url)
          setAvatar(data.avatar_url)
          // setName(data.name)
          setUrl(`https://github.com/${id}`)
          if (data.message) {
            // 'Not Found'だった時の判定として、dataの連想配列にmessageのキーがあるか確認
            setColor("warning")
          } else {
            // dataにmessageのキーがない=>アカウント発見
            setColor("success")
          }
          console.log(name)
          // ここでstateであるsetName更新関数を用いて、
          // APIから返ってきたdate.nameをstateのnameとして更新する。
          // このnameを使って何かしたい。=> ボタンクリックでicon画像表示とか。
        })
        .catch(error => {
          // errorが返ってきた時の処理。
          console.error(error)
        })
    }, 1500)

    // 下記でtimerの秒数リセット。
    return () => clearTimeout(timer)
    } else {
      // 上記if文条件に合致しない(renderFlagRefがfalseであり、初回renderingの時、
      // renderFlagRefをtrueにして、それ以降はuseEffectにてAPI叩くようにする。
      renderFlagRef.current = true
    }
  }, [id])
  // useEffectの第二引数に[id]を渡すことにより、stateのidが更新された時のみuseEffect内部の処理を実行。

  return (
    <div>
      <h2>GitHub API for Account Component</h2>
      <Button href={url} variant="contained" color={color}>GitHub Page {id}</Button>
      <p>APIから取得したアカウントのアイコン画像URL:<br />{avatar}</p>
      <br />
      {avatar ? <img src={avatar} /> : <p>Icon Area</p>}
      {/* avatar stateの中身があるかないかで表示する内容をswitch */}
      <br />
      <br />
      <TextField
        label='GitHub name'
        onChange={inputName/* ここでTextFieldに入力があった時にinputNameを呼ぶ */}
      />
    </div>
  )
}

export default Account;

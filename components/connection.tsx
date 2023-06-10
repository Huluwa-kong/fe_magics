import React from 'react'
import Image from 'next/image'

export function Connection({ boxStyle }) {
    return (
        <>
            <div className={boxStyle}>
                <a href={ 'https://weixin.qq.com/' } className="group" target='_blank'>
                    <div
                        className="aspect-w-1 aspect-h-1 w-24 overflow-hidden rounded-sm xl:aspect-w-7 xl:aspect-h-8">
                        <Image
                            src={ '/qr-wechat-min.png' }
                            width={96}
                            height={96}
                            alt={ 'wechat' }
                            className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                        {/*<img*/}
                        {/*    src={ '/qr-wechat-min.png' }*/}
                        {/*    alt={ 'wechat' }*/}
                        {/*    className="h-full w-full object-cover object-center group-hover:opacity-75"*/}
                        {/*/>*/}
                        <h3 className="mt-3 text-sm">Wechat</h3>
                    </div>
                </a>
                <a href={ 'https://im.qq.com/index/' } className="group" target='_blank'>
                    <div
                        className="aspect-w-1 aspect-h-1 w-24 overflow-hidden rounded-sm xl:aspect-w-7 xl:aspect-h-8">
                        <Image
                            src={ '/qr-qq-min.png' }
                            width={96}
                            height={96}
                            alt={ 'qq' }
                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                        {/*<img*/}
                        {/*    src={ '/qr-qq-min.png' }*/}
                        {/*    alt={ 'qq' }*/}
                        {/*    className="h-full w-full object-cover object-center group-hover:opacity-75"*/}
                        {/*/>*/}
                        <h3 className="mt-3 text-sm">QQ</h3>
                    </div>
                </a>
                <a href={ 'https://t.me/+-gCWfRHlwDxhN2I1' } className="group" target='_blank'>
                    <div
                        className="aspect-w-1 aspect-h-1 w-24 overflow-hidden rounded-sm xl:aspect-w-7 xl:aspect-h-8">
                        <Image
                            src={ '/telegram.png' }
                            width={96}
                            height={96}
                            alt={ 'telegram' }
                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                        {/*<img*/}
                        {/*    src={ 'https://upload.wikimedia.org/wikipedia/commons/8/83/Telegram_2019_Logo.svg' }*/}
                        {/*    alt={ 'telegram' }*/}
                        {/*    className="h-full w-full object-cover object-center group-hover:opacity-75"*/}
                        {/*/>*/}
                        <h3 className="mt-3 text-sm">Telegram</h3>
                    </div>
                </a>
            </div>
        </>
    )
}
//@ts-nocheck
'use client'
import {CldUploadWidget} from 'next-cloudinary'
import Image from 'next/image'
import { useCallback } from 'react'
import {TbPhotoPlus} from 'react-icons/tb'



var cloudinary;

const ImageUpload=({
    onChange,
    value
})=>{
    const handleUpload=useCallback((result)=>{
        onChange(result.info.secure_url)
    },[onChange])

    return(
        <CldUploadWidget onUpload={handleUpload} uploadPreset='auhn5utw'
        options={{
            maxFiles:1
        }}  
        >
            {({open})=>{
                return(
                    <div onClick={()=>open?.()} className='relative cursor-pointer hover:opacity-70 border-dashed border-2 flex flex-col justify-center items-center h-[400px]'>
                        <TbPhotoPlus/>
                        <div className='text-lg'>
                            Click to Upload
                        </div>

                        { value &&(
                            <div className='absolute inset-0 w-full h-full'>
                                <Image alt='upload' fill style={{objectFit:'cover'}} src={value}/>
                            </div>
                        )

                        }
                    </div>
                )
            }}
        </CldUploadWidget>
    )
}

export default ImageUpload
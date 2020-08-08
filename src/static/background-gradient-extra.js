import React from 'react'

export function Background({ width, height }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100%'
      height='100%'
      viewBox={`0 0 ${width} ${height}`}
    >
      <rect fill='#662d91' width={width} height={height}></rect>
      <g stroke='#000' strokeWidth='66.7' strokeOpacity='0.05'>
        <circle fill='#662d91' cx='0' cy='0' r='1800'></circle>
        <circle fill='#622a8a' cx='0' cy='0' r='1700'></circle>
        <circle fill='#5e2782' cx='0' cy='0' r='1600'></circle>
        <circle fill='#5b247b' cx='0' cy='0' r='1500'></circle>
        <circle fill='#572174' cx='0' cy='0' r='1400'></circle>
        <circle fill='#531e6d' cx='0' cy='0' r='1300'></circle>
        <circle fill='#4e1c66' cx='0' cy='0' r='1200'></circle>
        <circle fill='#4a1960' cx='0' cy='0' r='1100'></circle>
        <circle fill='#461659' cx='0' cy='0' r='1000'></circle>
        <circle fill='#421453' cx='0' cy='0' r='900'></circle>
        <circle fill='#3e114c' cx='0' cy='0' r='800'></circle>
        <circle fill='#390f46' cx='0' cy='0' r='700'></circle>
        <circle fill='#350d40' cx='0' cy='0' r='600'></circle>
        <circle fill='#310b3a' cx='0' cy='0' r='500'></circle>
        <circle fill='#2d0934' cx='0' cy='0' r='400'></circle>
        <circle fill='#28072f' cx='0' cy='0' r='300'></circle>
        <circle fill='#240429' cx='0' cy='0' r='200'></circle>
        <circle fill='#210024' cx='0' cy='0' r='100'></circle>
      </g>
    </svg>
  )
}

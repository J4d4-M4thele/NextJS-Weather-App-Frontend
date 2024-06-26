import React from 'react';
import Container from './Container';
import WeatherDetails, { WeatherDetailProps } from './WeatherDetails';
import WeatherIcon from './WeatherIcon';
import { convertKelvinToCelcius } from '@/utils/convertKelvinToCelcius';

export interface ForecastWeatherDetailProps extends WeatherDetailProps {
    weatherIcon: string;
    date: string;
    day: string;
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    description: string;
}

export default function ForecastWeatherDetail(props: ForecastWeatherDetailProps) {
    const {
        weatherIcon = "02d",
        date = "19.09",
        day = "Tuesday",
        temp,
        feels_like,
        temp_min,
        temp_max,
        description
    } = props;

    return (
        <Container>
            {/* left */}
            <section className=" flex gap-4 items-center px-4">
                <div className=" flex flex-col gap-1 items-center">
                    <WeatherIcon iconname={weatherIcon} />
                    <p>{date}</p>
                    <p className='text-sm'>{day}</p>
                </div>

                {/*  */}
                <div className="flex flex-col px-4">
                    <span>{convertKelvinToCelcius(temp ?? 0)}°</span>
                    <div className="text-xs space-x-1 whitespace-nowrap">
                        <span>Feels like</span>
                        <span>{convertKelvinToCelcius(feels_like ?? 0)}°</span>
                        <p className="capitalize">{description}</p>
                    </div>
                </div>
            </section>
            {/* right */}
            <section className=" overflow-x-auto flex justify-between gap-4 px-4  w-full pr-10">
                <WeatherDetails {...props} />
            </section>
        </Container>
    );
}
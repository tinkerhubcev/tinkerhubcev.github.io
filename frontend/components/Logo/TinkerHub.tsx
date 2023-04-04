import Image from "next/image";

const TinkerHub = () => {
  const images = [
    {
      alt: "sample",
      url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAB8CAMAAADpYVpqAAAALVBMVEXx8/XCy9K/yND09vfk6OvHz9bZ3uPp7O/S2N7V2+DO1dvt8PLe4+fK0tji5eqXG518AAADV0lEQVR4nO2a2Y7rIAxAGQPZSPr/n3tDmn0Bm7D0Sj7SSPPQJKeOsVkq/v5bRGmBcFi9BKxeAlYvAauXgNVLwOolYPUSsHoJWL0ErF4CVi8Bq5eA1UvA6iVgdTIAyz/BtyiiDjA0Va+U+vRV221fg0YBddCVEULOCGHqVofcJ7c6/DXK+h6QUrX0zMmsDl0t7jE9VT6rOgzqHPB97HtNks+pDq1wmI/uY+QJ5FMH7Qr5LC9a/A2zqYOuveYWhc6aXOrQoMRttcEGPpM6NDjxSV7h7plJvULGfKbDJE0e9ZYkPlIh3HOoQ0uLucAlTQZ16Kji1r32VpogdQDCZC/IfMQMnmcEqMNQ9X2LLr86zFx4BytZHYZaTP1cIWeqT/MtBK3TnaoOa7GQBuMO/u7/jHS6E9Vh2Eww7kAs6Gd3V5GkRn3/+uXHl++UJkp2J6qfVHxhDx+iCHeaOvTH9+8eR6+G6Or++Ayi+snF3a9fJrrPnahujnftXer7If3Kvbl/ClFdHe/qjLo29yp07t2Jw/Q0kRqcXzNO0Efk7ZyAqH4sGcYRdPSyCMNtB6G2pP3Ik66gD/HELe/V92ngbHXnUfESqa7Pok+/qu9mijQPA//7Kfrqwuf+Xt3OecfqXlfOWW+86rK6X95x8FLD3Udxey4093NrSrLAi1pdNk7vOYl65OqycCqRKdQjV5eNY5k5qMOf1sOI1qGHJNNdYleXleOcaacOulJmOigRdd03wQdU8avLxr4gr+ownF+z6mhb9Qup0mVil+6L+thpLkhP8b4lUXVZla7q/cNniYckMdZ0bvct3Wf1xwmqRO1c7kiaLmK/8BBuc4tBbRl/SVddNpZ0t+q+RYH8ZNilw7Oku1XvvZEyDVI9dbpYlnQXlw2K+4+jDknibAH4ZbqvOnSox0nvnrFtDamlZ76TGYHOTvfepSVlGz2qTJMZgc/Ou0XWIeg5En1WsRWSdEHtSppMiT4z0NTtFY/uoecugdRAVX/eBdA5Yz6JBFxybx5hU5eEoXe/hwpv8gbdDryAa+7cE+wApOB6hqTdP9H5IU6dFbpcrSgKW2cFjZkD/RDyM9g9g/GvzT5A32P6tq3y9f64yMtvLRmGYRiGYRiGYRiGYRiGYRiG+XH+Af7XNWKHsbm7AAAAAElFTkSuQmCC",
    },
    {
      alt: "sample",
      url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAB8CAMAAADpYVpqAAAALVBMVEXx8/XCy9K/yND09vfk6OvHz9bZ3uPp7O/S2N7V2+DO1dvt8PLe4+fK0tji5eqXG518AAADV0lEQVR4nO2a2Y7rIAxAGQPZSPr/n3tDmn0Bm7D0Sj7SSPPQJKeOsVkq/v5bRGmBcFi9BKxeAlYvAauXgNVLwOolYPUSsHoJWL0ErF4CVi8Bq5eA1UvA6iVgdTIAyz/BtyiiDjA0Va+U+vRV221fg0YBddCVEULOCGHqVofcJ7c6/DXK+h6QUrX0zMmsDl0t7jE9VT6rOgzqHPB97HtNks+pDq1wmI/uY+QJ5FMH7Qr5LC9a/A2zqYOuveYWhc6aXOrQoMRttcEGPpM6NDjxSV7h7plJvULGfKbDJE0e9ZYkPlIh3HOoQ0uLucAlTQZ16Kji1r32VpogdQDCZC/IfMQMnmcEqMNQ9X2LLr86zFx4BytZHYZaTP1cIWeqT/MtBK3TnaoOa7GQBuMO/u7/jHS6E9Vh2Eww7kAs6Gd3V5GkRn3/+uXHl++UJkp2J6qfVHxhDx+iCHeaOvTH9+8eR6+G6Or++Ayi+snF3a9fJrrPnahujnftXer7If3Kvbl/ClFdHe/qjLo29yp07t2Jw/Q0kRqcXzNO0Efk7ZyAqH4sGcYRdPSyCMNtB6G2pP3Ik66gD/HELe/V92ngbHXnUfESqa7Pok+/qu9mijQPA//7Kfrqwuf+Xt3OecfqXlfOWW+86rK6X95x8FLD3Udxey4093NrSrLAi1pdNk7vOYl65OqycCqRKdQjV5eNY5k5qMOf1sOI1qGHJNNdYleXleOcaacOulJmOigRdd03wQdU8avLxr4gr+ownF+z6mhb9Qup0mVil+6L+thpLkhP8b4lUXVZla7q/cNniYckMdZ0bvct3Wf1xwmqRO1c7kiaLmK/8BBuc4tBbRl/SVddNpZ0t+q+RYH8ZNilw7Oku1XvvZEyDVI9dbpYlnQXlw2K+4+jDknibAH4ZbqvOnSox0nvnrFtDamlZ76TGYHOTvfepSVlGz2qTJMZgc/Ou0XWIeg5En1WsRWSdEHtSppMiT4z0NTtFY/uoecugdRAVX/eBdA5Yz6JBFxybx5hU5eEoXe/hwpv8gbdDryAa+7cE+wApOB6hqTdP9H5IU6dFbpcrSgKW2cFjZkD/RDyM9g9g/GvzT5A32P6tq3y9f64yMtvLRmGYRiGYRiGYRiGYRiGYRiG+XH+Af7XNWKHsbm7AAAAAElFTkSuQmCC",
    },
    {
      alt: "sample",
      url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAB8CAMAAADpYVpqAAAALVBMVEXx8/XCy9K/yND09vfk6OvHz9bZ3uPp7O/S2N7V2+DO1dvt8PLe4+fK0tji5eqXG518AAADV0lEQVR4nO2a2Y7rIAxAGQPZSPr/n3tDmn0Bm7D0Sj7SSPPQJKeOsVkq/v5bRGmBcFi9BKxeAlYvAauXgNVLwOolYPUSsHoJWL0ErF4CVi8Bq5eA1UvA6iVgdTIAyz/BtyiiDjA0Va+U+vRV221fg0YBddCVEULOCGHqVofcJ7c6/DXK+h6QUrX0zMmsDl0t7jE9VT6rOgzqHPB97HtNks+pDq1wmI/uY+QJ5FMH7Qr5LC9a/A2zqYOuveYWhc6aXOrQoMRttcEGPpM6NDjxSV7h7plJvULGfKbDJE0e9ZYkPlIh3HOoQ0uLucAlTQZ16Kji1r32VpogdQDCZC/IfMQMnmcEqMNQ9X2LLr86zFx4BytZHYZaTP1cIWeqT/MtBK3TnaoOa7GQBuMO/u7/jHS6E9Vh2Eww7kAs6Gd3V5GkRn3/+uXHl++UJkp2J6qfVHxhDx+iCHeaOvTH9+8eR6+G6Or++Ayi+snF3a9fJrrPnahujnftXer7If3Kvbl/ClFdHe/qjLo29yp07t2Jw/Q0kRqcXzNO0Efk7ZyAqH4sGcYRdPSyCMNtB6G2pP3Ik66gD/HELe/V92ngbHXnUfESqa7Pok+/qu9mijQPA//7Kfrqwuf+Xt3OecfqXlfOWW+86rK6X95x8FLD3Udxey4093NrSrLAi1pdNk7vOYl65OqycCqRKdQjV5eNY5k5qMOf1sOI1qGHJNNdYleXleOcaacOulJmOigRdd03wQdU8avLxr4gr+ownF+z6mhb9Qup0mVil+6L+thpLkhP8b4lUXVZla7q/cNniYckMdZ0bvct3Wf1xwmqRO1c7kiaLmK/8BBuc4tBbRl/SVddNpZ0t+q+RYH8ZNilw7Oku1XvvZEyDVI9dbpYlnQXlw2K+4+jDknibAH4ZbqvOnSox0nvnrFtDamlZ76TGYHOTvfepSVlGz2qTJMZgc/Ou0XWIeg5En1WsRWSdEHtSppMiT4z0NTtFY/uoecugdRAVX/eBdA5Yz6JBFxybx5hU5eEoXe/hwpv8gbdDryAa+7cE+wApOB6hqTdP9H5IU6dFbpcrSgKW2cFjZkD/RDyM9g9g/GvzT5A32P6tq3y9f64yMtvLRmGYRiGYRiGYRiGYRiGYRiG+XH+Af7XNWKHsbm7AAAAAElFTkSuQmCC",
    },
    {
      alt: "sample",
      url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAB8CAMAAADpYVpqAAAALVBMVEXx8/XCy9K/yND09vfk6OvHz9bZ3uPp7O/S2N7V2+DO1dvt8PLe4+fK0tji5eqXG518AAADV0lEQVR4nO2a2Y7rIAxAGQPZSPr/n3tDmn0Bm7D0Sj7SSPPQJKeOsVkq/v5bRGmBcFi9BKxeAlYvAauXgNVLwOolYPUSsHoJWL0ErF4CVi8Bq5eA1UvA6iVgdTIAyz/BtyiiDjA0Va+U+vRV221fg0YBddCVEULOCGHqVofcJ7c6/DXK+h6QUrX0zMmsDl0t7jE9VT6rOgzqHPB97HtNks+pDq1wmI/uY+QJ5FMH7Qr5LC9a/A2zqYOuveYWhc6aXOrQoMRttcEGPpM6NDjxSV7h7plJvULGfKbDJE0e9ZYkPlIh3HOoQ0uLucAlTQZ16Kji1r32VpogdQDCZC/IfMQMnmcEqMNQ9X2LLr86zFx4BytZHYZaTP1cIWeqT/MtBK3TnaoOa7GQBuMO/u7/jHS6E9Vh2Eww7kAs6Gd3V5GkRn3/+uXHl++UJkp2J6qfVHxhDx+iCHeaOvTH9+8eR6+G6Or++Ayi+snF3a9fJrrPnahujnftXer7If3Kvbl/ClFdHe/qjLo29yp07t2Jw/Q0kRqcXzNO0Efk7ZyAqH4sGcYRdPSyCMNtB6G2pP3Ik66gD/HELe/V92ngbHXnUfESqa7Pok+/qu9mijQPA//7Kfrqwuf+Xt3OecfqXlfOWW+86rK6X95x8FLD3Udxey4093NrSrLAi1pdNk7vOYl65OqycCqRKdQjV5eNY5k5qMOf1sOI1qGHJNNdYleXleOcaacOulJmOigRdd03wQdU8avLxr4gr+ownF+z6mhb9Qup0mVil+6L+thpLkhP8b4lUXVZla7q/cNniYckMdZ0bvct3Wf1xwmqRO1c7kiaLmK/8BBuc4tBbRl/SVddNpZ0t+q+RYH8ZNilw7Oku1XvvZEyDVI9dbpYlnQXlw2K+4+jDknibAH4ZbqvOnSox0nvnrFtDamlZ76TGYHOTvfepSVlGz2qTJMZgc/Ou0XWIeg5En1WsRWSdEHtSppMiT4z0NTtFY/uoecugdRAVX/eBdA5Yz6JBFxybx5hU5eEoXe/hwpv8gbdDryAa+7cE+wApOB6hqTdP9H5IU6dFbpcrSgKW2cFjZkD/RDyM9g9g/GvzT5A32P6tq3y9f64yMtvLRmGYRiGYRiGYRiGYRiGYRiG+XH+Af7XNWKHsbm7AAAAAElFTkSuQmCC",
    },
    {
      alt: "sample",
      url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAB8CAMAAADpYVpqAAAALVBMVEXx8/XCy9K/yND09vfk6OvHz9bZ3uPp7O/S2N7V2+DO1dvt8PLe4+fK0tji5eqXG518AAADV0lEQVR4nO2a2Y7rIAxAGQPZSPr/n3tDmn0Bm7D0Sj7SSPPQJKeOsVkq/v5bRGmBcFi9BKxeAlYvAauXgNVLwOolYPUSsHoJWL0ErF4CVi8Bq5eA1UvA6iVgdTIAyz/BtyiiDjA0Va+U+vRV221fg0YBddCVEULOCGHqVofcJ7c6/DXK+h6QUrX0zMmsDl0t7jE9VT6rOgzqHPB97HtNks+pDq1wmI/uY+QJ5FMH7Qr5LC9a/A2zqYOuveYWhc6aXOrQoMRttcEGPpM6NDjxSV7h7plJvULGfKbDJE0e9ZYkPlIh3HOoQ0uLucAlTQZ16Kji1r32VpogdQDCZC/IfMQMnmcEqMNQ9X2LLr86zFx4BytZHYZaTP1cIWeqT/MtBK3TnaoOa7GQBuMO/u7/jHS6E9Vh2Eww7kAs6Gd3V5GkRn3/+uXHl++UJkp2J6qfVHxhDx+iCHeaOvTH9+8eR6+G6Or++Ayi+snF3a9fJrrPnahujnftXer7If3Kvbl/ClFdHe/qjLo29yp07t2Jw/Q0kRqcXzNO0Efk7ZyAqH4sGcYRdPSyCMNtB6G2pP3Ik66gD/HELe/V92ngbHXnUfESqa7Pok+/qu9mijQPA//7Kfrqwuf+Xt3OecfqXlfOWW+86rK6X95x8FLD3Udxey4093NrSrLAi1pdNk7vOYl65OqycCqRKdQjV5eNY5k5qMOf1sOI1qGHJNNdYleXleOcaacOulJmOigRdd03wQdU8avLxr4gr+ownF+z6mhb9Qup0mVil+6L+thpLkhP8b4lUXVZla7q/cNniYckMdZ0bvct3Wf1xwmqRO1c7kiaLmK/8BBuc4tBbRl/SVddNpZ0t+q+RYH8ZNilw7Oku1XvvZEyDVI9dbpYlnQXlw2K+4+jDknibAH4ZbqvOnSox0nvnrFtDamlZ76TGYHOTvfepSVlGz2qTJMZgc/Ou0XWIeg5En1WsRWSdEHtSppMiT4z0NTtFY/uoecugdRAVX/eBdA5Yz6JBFxybx5hU5eEoXe/hwpv8gbdDryAa+7cE+wApOB6hqTdP9H5IU6dFbpcrSgKW2cFjZkD/RDyM9g9g/GvzT5A32P6tq3y9f64yMtvLRmGYRiGYRiGYRiGYRiGYRiG+XH+Af7XNWKHsbm7AAAAAElFTkSuQmCC",
    },
    {
      alt: "sample",
      url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAB8CAMAAADpYVpqAAAALVBMVEXx8/XCy9K/yND09vfk6OvHz9bZ3uPp7O/S2N7V2+DO1dvt8PLe4+fK0tji5eqXG518AAADV0lEQVR4nO2a2Y7rIAxAGQPZSPr/n3tDmn0Bm7D0Sj7SSPPQJKeOsVkq/v5bRGmBcFi9BKxeAlYvAauXgNVLwOolYPUSsHoJWL0ErF4CVi8Bq5eA1UvA6iVgdTIAyz/BtyiiDjA0Va+U+vRV221fg0YBddCVEULOCGHqVofcJ7c6/DXK+h6QUrX0zMmsDl0t7jE9VT6rOgzqHPB97HtNks+pDq1wmI/uY+QJ5FMH7Qr5LC9a/A2zqYOuveYWhc6aXOrQoMRttcEGPpM6NDjxSV7h7plJvULGfKbDJE0e9ZYkPlIh3HOoQ0uLucAlTQZ16Kji1r32VpogdQDCZC/IfMQMnmcEqMNQ9X2LLr86zFx4BytZHYZaTP1cIWeqT/MtBK3TnaoOa7GQBuMO/u7/jHS6E9Vh2Eww7kAs6Gd3V5GkRn3/+uXHl++UJkp2J6qfVHxhDx+iCHeaOvTH9+8eR6+G6Or++Ayi+snF3a9fJrrPnahujnftXer7If3Kvbl/ClFdHe/qjLo29yp07t2Jw/Q0kRqcXzNO0Efk7ZyAqH4sGcYRdPSyCMNtB6G2pP3Ik66gD/HELe/V92ngbHXnUfESqa7Pok+/qu9mijQPA//7Kfrqwuf+Xt3OecfqXlfOWW+86rK6X95x8FLD3Udxey4093NrSrLAi1pdNk7vOYl65OqycCqRKdQjV5eNY5k5qMOf1sOI1qGHJNNdYleXleOcaacOulJmOigRdd03wQdU8avLxr4gr+ownF+z6mhb9Qup0mVil+6L+thpLkhP8b4lUXVZla7q/cNniYckMdZ0bvct3Wf1xwmqRO1c7kiaLmK/8BBuc4tBbRl/SVddNpZ0t+q+RYH8ZNilw7Oku1XvvZEyDVI9dbpYlnQXlw2K+4+jDknibAH4ZbqvOnSox0nvnrFtDamlZ76TGYHOTvfepSVlGz2qTJMZgc/Ou0XWIeg5En1WsRWSdEHtSppMiT4z0NTtFY/uoecugdRAVX/eBdA5Yz6JBFxybx5hU5eEoXe/hwpv8gbdDryAa+7cE+wApOB6hqTdP9H5IU6dFbpcrSgKW2cFjZkD/RDyM9g9g/GvzT5A32P6tq3y9f64yMtvLRmGYRiGYRiGYRiGYRiGYRiG+XH+Af7XNWKHsbm7AAAAAElFTkSuQmCC",
    },
  ];
  
  return (
    <div className="grid h-[500px] w-[500px] grid-cols-4 gap-2 drop-shadow-md">
      <div className=" col-span-3  rounded-xl bg-teal-500 backdrop-blur-3xl">
        <Image
          fill
          className="rounded-lg"
          style={{ objectFit: "cover" }}
          src={images[0].url}
          alt={images[0].alt}
        ></Image>
      </div>
      <div className="rounded-xl bg-blue-500 backdrop-blur-3xl">
        <Image
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
          src={images[1].url}
          alt={images[1].alt}
        ></Image>
      </div>
      <div className="col-span-4  rounded-xl bg-yellow-500 backdrop-blur-3xl">
        <Image
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
          src={images[2].url}
          alt={images[2].alt}
        ></Image>
      </div>
      <div className="col-span-2 rounded-xl bg-red-500 backdrop-blur-3xl">
        <Image
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
          src={images[3].url}
          alt={images[3].alt}
        ></Image>
      </div>
      <div className=" rounded-xl bg-lime-600 backdrop-blur-3xl">
        <Image
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
          src={images[4].url}
          alt={images[4].alt}
        ></Image>
      </div>
      <div className=" rounded-xl bg-emerald-700 backdrop-blur-3xl">
        <Image
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
          src={images[5].url}
          alt={images[5].alt}
        ></Image>
      </div>
    </div>
  );
};

export default TinkerHub;

# FROM php:8.0-apache

# RUN apt update \
#         && apt install -y \
#             g++ \
#             libicu-dev \
#             libpq-dev \
#             libzip-dev \
#             zip \
#             zlib1g-dev \
#         && docker-php-ext-install \
#             intl \
#             opcache \
#             pdo \
#             pdo_pgsql \
#             pgsql \
# WORKDIR /var/www/laravel_docker

# RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

FROM php:8.1.0-apache
WORKDIR /var/www/html
COPY . /var/www/html
RUN chown -R www-data:www-data /var/www/html

# Mod Rewrite
RUN a2enmod rewrite

# Install MySQL Client
RUN apt-get update && apt-get install -y default-mysql-client


# Linux Library
RUN apt-get update -y && apt-get install -y \
    libicu-dev \
    libmariadb-dev \
    unzip zip \
    zlib1g-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev 

# Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# PHP Extension
RUN docker-php-ext-install gettext intl pdo_mysql gd

RUN docker-php-ext-configure gd --enable-gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd

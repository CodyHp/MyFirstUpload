package org.dj;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

/**
 * Hello world!
 *
 */
@SpringBootApplication
@EnableEurekaClient
public class StartTest
{
    public static void main( String[] args )
    {
        SpringApplication.run(StartTest.class, args);
        System.out.println( "Hello World!" );
    }

    @Bean
    @LoadBalanced
    public RestTemplate initRestTemplateMovie() {
        return new RestTemplate();
    }
}

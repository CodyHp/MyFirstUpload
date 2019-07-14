package org.dj;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

/**
 * Hello world!
 *
 */
@SpringBootApplication
@EnableZuulProxy
public class StartZuulService
{
    public static void main( String[] args )
    {
        SpringApplication.run(StartZuulService.class, args);
        System.out.println( "Hello World!" );
    }
}

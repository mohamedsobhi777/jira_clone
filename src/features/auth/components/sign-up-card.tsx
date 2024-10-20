

import z from 'zod';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { DottedSeparator } from '@/components/dotted-separator'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const formSchema = z.object({
    name: z.string().min(1, "Required"),
    email: z.string().email(),
    password: z.string().min(8, "Minimum 8 characters"),
})

const SignUpCard = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {

    }

    return (
        <Card className='w-full h-full md:w-[487px] border-none shadow-none'>
            <CardHeader className='flex items-center justify-center text-center p-7'>
                <CardTitle className='text-2xl '>
                    Sign Up
                </CardTitle>
                <CardDescription>
                    By signing up, you agree to our {" "}
                    <Link href="/privacy" className='text-blue-700'>
                        <span>Privacy Policy</span>
                    </Link>{" "}
                    and {" "}
                    <Link href="/terms" className='text-blue-700'>
                        <span>Terms of Service</span>
                    </Link>
                </CardDescription>
            </CardHeader>

            <div className='px-7'>
                <DottedSeparator />
            </div>

            <CardContent className='p-7'>
                <Form {...form}>
                    <form className='space-y-4'>
                        <FormField
                            name="name"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="text"
                                            placeholder="Enter your name"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="email"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="email"
                                            placeholder="Enter email address"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="password"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="password"
                                            placeholder="Enter password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button disabled={false} size="lg" className='w-full'>
                            Login
                        </Button>
                    </form>
                </Form>
            </CardContent>

            <div className='px-7'>
                <DottedSeparator />
            </div>

            <CardContent className='p-7 flex flex-col gap-y-4'>
                <Button
                    disabled={false}
                    variant="secondary"
                    size="lg"
                    className='w-full'
                >
                    <FcGoogle className='mr-2 size-5' />
                    Login With Google
                </Button>
                <Button
                    disabled={false}
                    variant="secondary"
                    size="lg"
                    className='w-full'
                >
                    <FaGithub className='mr-2 size-5' />
                    Login With Github
                </Button>
            </CardContent>

            <div className='px-7'>
                <DottedSeparator />
            </div>

            <CardContent className='p-7 flex items-center justify-center'>
                <p>
                    Already have an account?
                    <Link href='/sign-in' className='text-blue-700'>
                        &nbsp;Sign In
                    </Link>
                </p>
            </CardContent>

        </Card>
    )
}

export default SignUpCard
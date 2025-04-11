import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailIsValid = email.endsWith('@concordia.ca');
    const passwordIsValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if (!emailIsValid) {
      toast({
        title: "Invalid Email",
        description: "Email must end with @concordia.ca",
        variant: "destructive",
      });
      return;
    }

    if (!passwordIsValid) {
      toast({
        title: "Invalid Password",
        description: "Password must have one uppercase letter, one lowercase letter, one number, and one symbol.",
        variant: "destructive",
      });
      return;
    }

    if (name && emailIsValid && gender && age && passwordIsValid) {
      toast({
        title: "Sign Up Successful",
        description: "Welcome to Concordia Fitness!",
      });
      navigate('/login');
    } else {
      toast({
        title: "Sign Up Failed",
        description: "Please fill out all fields",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left side - Image */}
      <div className="hidden md:block md:w-1/2 relative">
        <img 
          src="/lovable-uploads/login.jpeg"
          alt="Fitness Training" 
          className="h-full w-full object-cover" 
        />
        <div className="absolute top-6 left-6">

        </div>
      </div>

      {/* Right side - Sign Up Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-16 py-12">
        <div className="w-full max-w-md">
          {/* Mobile logo - only visible on mobile */}
          <div className="mb-8 flex justify-center md:hidden">
            <img 
              src="/lovable-uploads/798813f4-cfef-493e-bcfd-d629448f5364.png" 
              alt="Concordia Logo" 
              className="h-12"
            />
          </div>

          <h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>
          
          <p className="text-center text-gray-600 mb-8">
            Sign up with your details to get started with Concordia Fitness.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Concordia email"
                  className="pl-10"
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="pl-10"
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-fitness-dark text-white hover:bg-black"
            >
              Sign Up
            </Button>
            
            <div className="text-center text-sm">
              Already have an account? <Link to="/login" className="text-fitness-red font-medium hover:underline">Login here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

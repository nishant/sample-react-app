import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import './styles/offer-filter.scss'
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const OfferFilter = ()  => {
  return (
    <>
      <h1>Create an Offer</h1>
      <div className="filter-container flex">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="filter-container flex">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex w-[180px] overflow-hidden">
          <Input className="w-[80px]"/>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button>Submit</Button>
    </>
  )
};

export default OfferFilter;
